using System;
using Azure.Communication;
using Azure.Communication.Sms;

namespace SendSMS
{
    internal class Program
    {
        private static void Main()
        {
            const string connectionString = "YOUR_CONNECTION_STRING"; // Acquire from your Azure Communication resource in the Azure portal 
            var smsClient = new SmsClient(connectionString);
            var response = smsClient.Send(
                from: new PhoneNumber("+1YOUR-PHONE-NUMBER"), // Acquire phone number on your Azure Communication resource
                to: new PhoneNumber("+12222222222"),
                message: "Hello 👋🏻");

            Console.WriteLine($"Message id {response.Value.MessageId}");
        }
    }
}
