// © Microsoft Corporation. All rights reserved.

using System.Collections.Generic;

namespace Chat
{
	public class InMemoryChatAdminThreadStore : IChatAdminThreadStore
	{
		public Dictionary<string, ContosoChatTokenModel> Store { get; }

		public Dictionary<string, ContosoUserConfigModel> UseConfigStore { get; }

		/// <summary>
		/// To maintain a storage of all of the chat threads and their associated moderater "users" to add in new users
		/// </summary>
		public InMemoryChatAdminThreadStore()
		{
			Store = new Dictionary<string, ContosoChatTokenModel>();
			UseConfigStore = new Dictionary<string, ContosoUserConfigModel>();
		}
	}
}
