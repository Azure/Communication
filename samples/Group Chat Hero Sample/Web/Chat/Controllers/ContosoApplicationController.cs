// © Microsoft Corporation. All rights reserved.

using Microsoft.AspNetCore.Mvc;

namespace Chat
{
	[ApiController]
	public class ContosoApplicationController
	{
		IChatAdminThreadStore _store;

		public ContosoApplicationController(IChatAdminThreadStore store)
		{
			_store = store;
		}

		/// <summary>
		/// Add the user to the thread if possible
		/// </summary>
		/// <param name="threadId"></param>
		/// <param name="user"></param>
		/// <returns>200 if successful and </returns>
		[Route("userConfig/{userId}")]
		[HttpPost]
		public string SetUserConfiguration(string userId, ContosoUserConfigModel userConfig)
		{
			_store.UseConfigStore[userId] = userConfig;
			return userId;
		}

		/// <summary>
		/// If the only user is the moderator, then we will try to remove the moderator and delete the thread
		/// </summary>
		/// <param name="threadId"></param>
		/// <returns></returns>
		/// <remarks>Optional for client to send but it would be nice to clean up un-used chat threads</remarks>
		[Route("userConfig/{userId}")]
		[HttpGet]
		public ContosoUserConfigModel GetUserConfiguration(string userId)
		{
			return _store.UseConfigStore[userId];
		}
	}
}
