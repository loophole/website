---
slug: "Commands/Authentication"
title: "Authentication"
---

## Log in using your Authtoken

To access Loophole services described in further sections, you need to sign up for an account. Once you've signed up, you need to configure loophole with the authtoken. This will grant you access to account-only features. Loophole has a simple 'account' command to make this easy. Under the hood, the login command does is to add (or modify) the authtoken property in your loophole configuration file. 

<b>Under beta testing, all the features are available to every user at no cost. </b>


#### <code> account </code> Command


<b>Usage :</b> This command is responsible for user account related functions.

##### Sub commands :

<b><code> 1. login  </code> </b>

To get the beta benefits the user should login with his access token which can be generated using the following command :

<divs style="background-color:black;color:white;padding:10px;font-size: 105%;clear: left;display: table;justify-content: left align-items: left; flex-direction: column;">$ loophole account login </div> 

<br/>
<b> <code> 2. logout  </code> </b>

On the utilization of the services, you get an option to logout from the account. This keeps the data intact and disconnected from the server. By simply using the logout command :


<divs style="background-color:black;color:white;padding:10px;font-size: 105%;clear: left;display: table;justify-content: left align-items: left; flex-direction: column;">$ loophole account logout </div>
