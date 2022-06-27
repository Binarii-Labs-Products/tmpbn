# tmpbn
A Temporary Bin.  
tmpbn.com. 

Share secrets without using credentials.
A simple client heavy app that allows secrets to be saved temporarily on a server and then viewed by another device or user.  

Process.  
User enters 2 phrases they must remember. 
User enters a secret.  
The secret is encrypted at the browser with the hash of the 2 phrases as the decryption key.  
The server is updated with the hash, the encrypted data and a timestamp.
If the user has selected the Burn at Get checkbox, this parameter is sent to the server.  
To retrieve the secret, the 2 phrases are reentered. If these are correct the server sends the encrypted secret to the browser.
The browser attempts to decrypt the secret with the 2 phrases.  
If successful the secret will be revealed.  
If the Burn at Get was checked, the secret will be deleted on the server immediately - otherwise the secrets stay on the server for 5 minutes.

Api key.  
A session variable is inserted into the page and this is validated by the server storing and retrieving the secrets.  
This enables future releases to have logins and control the secrets.  
The apikey is used to help monitor and control heavy use and potential spamming.  
