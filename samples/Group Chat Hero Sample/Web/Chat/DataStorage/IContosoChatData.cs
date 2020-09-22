// © Microsoft Corporation. All rights reserved.

using System.Collections.Generic;

namespace Chat
{
	public interface IChatAdminThreadStore
	{
		Dictionary<string, ContosoChatTokenModel> Store { get; }
		Dictionary<string, ContosoUserConfigModel> UseConfigStore { get; }
	}
}
