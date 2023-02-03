Cloned from Ayşegül Yönet's WebXRWorkshop https://github.com/mecawish/webXRWorkshop  
Minimized and modified for simple mkcert ssl certificate and local https browsing  
 
 1 - **Install dependencies**  
 ```
 $ npm install -g typescript
 $ npm install
 $ npm install mkcert
 ```    
<br>   
   
 2 - **For security purposes, temporarily change directory to outside your local repo.**   
 **SSL keys will be located in this newly designated directory. App is setup for c:/GitRepos**        
 ```
 $ cd ..
 ```  
 <br>
 
3 - **Install SSL certificates for https://localhost** 
```
$ mkcert -install
$ mkcert localhost
```  
> **_note: DO NOT share your key files with anyone._**
<br>

4 - **Change directory back to local repo root**
```
$ cd webxr-https
```
<br>

5 - **Start the server**
```
$ npm run dev
```
<br>

6 - **Open https://localhost in WebXR enabled browser.**
