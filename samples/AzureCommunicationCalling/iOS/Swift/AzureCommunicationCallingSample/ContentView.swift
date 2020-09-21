// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import SwiftUI
import AzureCommunicationCalling
import AVFoundation

struct ContentView: View {
    @State var callee: String = ""
    @State var callClient: ACSCallClient?
    @State var callAgent: ACSCallAgent?
    @State var call: ACSCall?

    var body: some View {
        NavigationView {
            Form {
                Section {
                    TextField("Who would you like to call?", text: $callee)
                    Button(action: startCall) {
                        Text("Start Call")
                    }.disabled(callAgent == nil)
                    Button(action: endCall) {
                        Text("End Call")
                    }.disabled(call == nil)
                }
            }
            .navigationBarTitle("Calling Quickstart")
        }.onAppear {
            // Initialize call agent
            var userCredential: CommunicationUserCredential?
            do {
                userCredential = try CommunicationUserCredential(token: "<USER_TOKEN_HERE>")
            } catch {
                print("ERROR: It was not possible to create user credential.")
                return
            }

            self.callClient = ACSCallClient()

            // Creates the call agent
            self.callClient?.createCallAgent(userCredential) { (agent, error) in
                if error != nil {
                    print("ERROR: It was not possible to create a call agent.")
                }

                if let agent = agent {
                    self.callAgent = agent
                    print("Call agent successfully created.")
                }
            }
        }
    }

    func startCall() {
        // Ask permissions
        AVAudioSession.sharedInstance().requestRecordPermission { (granted) in
            if granted {
                let callees:[CommunicationIdentifier] = [CommunicationUser(identifier: self.callee)]
                self.call = self.callAgent?.call(callees, options: ACSStartCallOptions())
            }
        }
    }

    func endCall() {
        if let call = call {
            call.hangup(ACSHangupOptions(), withCompletionHandler: { (error) in
                if error != nil {
                    print("ERROR: It was not possible to hangup the call.")
                }
            })
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
