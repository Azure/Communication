// © Microsoft Corporation. All rights reserved.

using Azure;
using Azure.Communication;
using Azure.Communication.Chat;
using Azure.Communication.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Chat
{
	/// <summary>
	/// To enable test clients to chat in the same thread
	/// </summary>
	[ApiController]
	public class ContosoHandshakeController : Controller
	{
		IUserTokenManager _userTokenManager;
		IChatAdminThreadStore _store;
		string _chatGatewayUrl;
		string _resourceConnectionString;

		const string GUID_FOR_INITIAL_TOPIC_NAME = "c774da81-94d5-4652-85c7-6ed0e8dc67e6";

		public ContosoHandshakeController(IChatAdminThreadStore store, IUserTokenManager userTokenManager, IConfiguration chatConfiguration)
		{
			_store = store;
			_userTokenManager = userTokenManager;
			_chatGatewayUrl = Utils.ExtractApiChatGatewayUrl(chatConfiguration["ResourceConnectionString"]);
			_resourceConnectionString = chatConfiguration["ResourceConnectionString"];
		}

		/// <summary>
		/// Gets a skype token for the client
		/// </summary>
		/// <returns></returns>
		[Route("token")]
		[HttpPost]
		public async Task<ContosoChatTokenModel> GenerateAdhocUser()
		{
			return await InternalGenerateAdhocUser();
		}

		/// <summary>
		/// Get the environment url
		/// </summary>
		/// <returns></returns>
		[Route("getEnvironmentUrl")]
		[HttpGet]
		public string GetEnvironmentUrl()
		{
			return _chatGatewayUrl;
		}

		/// <summary>
		/// Creates a new thread
		/// </summary>
		/// <returns></returns>
		[Route("createThread")]
		[HttpPost]
		public async Task<string> CreateNewThread()
		{
			return await InternalGenerateNewModeratorAndThread();
		}

		/// <summary>
		/// Check if a given thread Id exists in our in memory dictionary
		/// </summary>
		/// <returns></returns>
		[Route("isValidThread/{threadId}")]
		[HttpGet]
		public ActionResult IsValidThread(string threadId)
		{
            if (!_store.Store.ContainsKey(threadId))
            {
                return NotFound();
            }
            return Ok();
		}

		/// <summary>
		/// Add the user to the thread if possible
		/// </summary>
		/// <param name="threadId"></param>
		/// <param name="user"></param>
		/// <returns>200 if successful and </returns>
		[Route("addUser/{threadId}")]
		[HttpPost]
		public async Task<ActionResult> TryAddUserToThread(string threadId, ContosoMemberModel user)
		{
			try
            {
				var moderator = _store.Store[threadId];
				var userCredential = new CommunicationUserCredential(moderator.token);
				ChatClient chatClient = new ChatClient(new Uri(_chatGatewayUrl), userCredential);
				ChatThread chatThread = chatClient.GetChatThread(threadId);
				ChatThreadClient chatThreadClient = chatClient.GetChatThreadClient(threadId);

				var chatThreadMember = new ChatThreadMember(new CommunicationUser(user.Id));
				chatThreadMember.DisplayName = user.DisplayName;
				chatThreadMember.ShareHistoryTime = chatThread.CreatedOn;
				List<ChatThreadMember> chatThreadMembers = new List<ChatThreadMember>
				{
					chatThreadMember
				};
				try
				{
					var response = await chatThreadClient.AddMembersAsync(chatThreadMembers);
					return StatusCode(response.Status);
				}
				catch (RequestFailedException e)
				{
					Console.WriteLine($"Unexpected error occurred while adding user from thread: {e}");
					return StatusCode(e.Status);
				}
			} 
			catch (Exception e)
            {
				Console.WriteLine($"Unexpected error occurred while adding user from thread: {e}");
            }
			return Ok();
		}

		private async Task<ContosoChatTokenModel> InternalGenerateAdhocUser()
		{
			var (userMri, token, expiresIn) = await _userTokenManager.GenerateTokenAsync(_resourceConnectionString);
			ContosoChatTokenModel model = new ContosoChatTokenModel
			{
				identity = userMri,
				token = token,
				expiresIn = expiresIn
			};
			return model;
		}

		private async Task<string> InternalGenerateNewModeratorAndThread()
		{
			var moderator = await InternalGenerateAdhocUser();
			var userCredential = new CommunicationUserCredential(moderator.token);
			ChatClient chatClient = new ChatClient(new Uri(_chatGatewayUrl), userCredential);
			List<ChatThreadMember> chatThreadMembers = new List<ChatThreadMember>
			{
				new ChatThreadMember(new CommunicationUser(moderator.identity))
			};
			ChatThreadClient chatThreadClient = await chatClient.CreateChatThreadAsync(GUID_FOR_INITIAL_TOPIC_NAME, chatThreadMembers);

			_store.Store.Add(chatThreadClient.Id, moderator);
			return chatThreadClient.Id;
		}
	}
}