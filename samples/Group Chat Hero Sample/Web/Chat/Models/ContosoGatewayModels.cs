// © Microsoft Corporation. All rights reserved.

using System.Collections.Generic;

namespace Chat
{
	public class ContosoMemberModel
    {
        public string Id;
        public string DisplayName;
        public string MemberRole;
        public string ShareHistoryTime;
    }

    public class ContosoThreadMemberModelList
    {
        public List<ContosoMemberModel> Members;
    }

    public class ContosoCreateThreadModel
    {
        public string Topic;
        public bool IsStickyThread;
        public string Type;
        public string Description;
        public List<ContosoMemberModel> Members;
        public string CreatorUserName;
    }
}
