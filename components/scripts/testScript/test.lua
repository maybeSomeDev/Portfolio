local myWallet = {}
local myFriendsWallet = {
  money = 1000
}

myWallet.__index = myFriendsWallet

setmetatable(myWallet,myFriendsWallet)

print(myWallet.money)