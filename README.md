# tmpbn
A Temporary Bin (tmpbn).  

Share secrets without using actor credentials.

This is a simple zero knowledge app that allows secrets to be encrypted and saved temporarily on a server and then viewed by another device or actor.  

Access
======
Website (https://tmpbn.com).  
Progressive Web App.  


Problem it solves
=================
Transmitting simple data such as a credit card number, combination to a safe or a url link, to another device can be achieved in many ways:

- Texting
- SMS
- Messaging apps
- Email
- Public forums
- Via url shorteners
- Airdrop
- Cloud sharing
- File transfer
- etc.

However, in most cases the owning actor, and the recipient actor, may have to disclose an email or phone number and carry out risk assessments on their privacy. The actors will have to consider the archiving, storage and encryption policies of the third parties involved.

Tmpbn allows for information to be encrypted by one actor and then decrypted by another actor, or the same actor, and for this information to be deleted on access without the need for multiple third party involvement.

Process
=======
- The owning actor enters 2 phrases they must remember. If they cannot remember these phrases and the order of input, then they will not be able to Get and decrypt back into plain text.  
- The owning actor enters a secret.  
- The secret is encrypted at the browser with the hash of the 2 phrases as the decryption key.  
- When Saved, the storage server is updated with the hash, the encrypted data, an api key and a timestamp.
- The storage server seeks authorization with the serving server and ensure the api key is the same. If not the storage is rejected.
- If the user has selected the Burn at Get checkbox, this parameter is sent to the server.  
- To retrieve the secret, the 2 phrases are reentered by the recipient actor. If these are correct the storage server sends the encrypted secret to the browser.
- The browser attempts to decrypt the secret with the 2 phrases. If successful the secret will be revealed.  
- If the Burn at Get was checked, the secret will be deleted on the server immediately - otherwise the secrets stay on the server for 5 minutes.


Api key control
===============
The apikey is used to help monitor and control heavy use and potential spamming.  

Future enhancements
===================
Future enhancements include allowing the actor to choose the storage server (such as Dropbox, Google Drive, Wasabi etc) and actor validation via blockchain.
