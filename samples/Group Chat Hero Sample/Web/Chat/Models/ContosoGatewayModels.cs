// © Microsoft Corporation. All rights reserved.

using System.Collections.Generic;

namespace Chat
{
    public class ContosoMemberModel
    {
        public string Id { get; set; }
        public string DisplayName { get; set; }
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
