# tmpbn
A Temporary Bin (tmpbn).  

Share plain text secrets without owning and recipient actor credentials such as email, ip address or phone numbers being revealed.

Secrets are physically removed from the server after 5 minutes or on decryption.

This is a simple zero knowledge app that allows secrets to be encrypted and saved temporarily on a server and then viewed by another device or actor. 

Version 0.0.197.

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

However, in most cases the owning actor, and the recipient actor, may have to disclose an email or phone number and carry out risk assessments on their privacy. The actors will have to consider the archiving, storage and encryption policies of the third parties involved along with having to trust the encryption at rest.

Tmpbn allows for information to be encrypted by one actor and then decrypted by another actor, or the same actor, and for this information to be deleted on access without the need for multiple third party involvement.

Security
========
-  Security involves ensuring the key used to encrypt the plain text data is strong and is seeded with a random salt generated by the server to avoid collisions. It also involves keeping the encrypted data for only 5 minutes and not carrying out backups. It also involves disclosing to the user what the servers are doing and what they are storing, archiving and deleting. 
- There are 2 servers used in the process of ensuring the data is not compromised. The serving server serves the app and the storage server retains the encrypted data. The 2 servers communicate with each other to validate the accuracy and completeness of the process.
- To enhance the SHA256 hashing, a seed (or salt) phrase is generated by the serving server. This seed is updated every 10 minutes. The plain text is encrypted with the 2 phrases and the seed.
There are 2 seeds generated for every session by the serving server. The app will use the current seed. As these seeds are changed frequently, it reduces the ability of a hacker trying to establish patterns in the hashes and encrypted data.
- Each session is provided with an apikey from the serving server. The storage server validates this api-key before it saves or gets the data it holds. The api-key is passed as a parameter of the url and if this is tampered with, the storage server will reject the call. 
- The serving server serves the html; js; css; the api-key; seed 1 and seed 2.
- The storage server api's the serving storage and validates the api-key. If they do not agree, the process is not completed.
- The storage server holds the hash, encrypted data, timestamp provided by the app, a UTC unix timestamp. It runs a process to physically delete all records where the UTC unix stamp is more than 5 minutes old.

Process
=======
- The owning actor enters a memorable phrase they must remember. If they cannot remember this phrase or the server generated phrase (see below), then they will not be able to Get and decrypt back into plain text.  
- The owning actor enters a secret : min 2 chars or max 500.  
- The secret is encrypted at the browser with the hash of the phrase and current seed sent to the client, as the decryption key.  
- The serving server provides 2 seeds to the browser - the current seed and the previous seed.
- Seeds are randomly calculated and rotated every frequently (not less than 10 minutes).  
- When Saved, the storage server is updated with the hash using the current seed, the encrypted data, an api-key and a timestamp.
- The storage server seeks authorization with the serving server to ensure the api-key is the same. If not the storage call is rejected.
- The storage server returns a phrase of words.  
- The owning actor can copy the server phrase. 
- The owning actor can copy a link for the purposes of transmitting to another actor. The other actor can open the url and enter the memorable phrase to Get and reveal the secret.  
- If the owning actor has selected the Burn at Get checkbox, this parameter is sent to the server.  
- To retrieve the secret, the memorable phrases and server generated phrease are reentered by the recipient actor. The app sends the hash of these and the current seed. If these are correct the storage server sends the encrypted secret to the browser.  
- The browser will attempt to decrypt the secret with the phrases and the 2 seeds the browser has stored. If successful the secret will be revealed.  
- If the Burn at Get was checked, the secret will be deleted on the server immediately - otherwise the secrets stay on the server for 5 minutes.

Api-key control
===============
The pre generated api-key is used to help monitor and control heavy use and potential spamming.  
The server sends back a unique phrase for the purposes of strengtening the encryption and to eliminate hash clash where 2 actors have used the same password and seed combination.

Future enhancements
===================
Future enhancements include allowing the actor to choose the storage server (such as Dropbox, Google Drive, Wasabi etc) and actor validation via blockchain. Also, will consider use of key generators at the device level.
Data shared is restricted to 500 as this is sent by the url. To allow longer text, the browser will chunk the blob data into pieces and api these chunks to the server for concatination. 
