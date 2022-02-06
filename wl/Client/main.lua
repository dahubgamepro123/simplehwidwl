local Response = syn.request({
    Url = "http://localhost/check",
    Method = "GET"
}).Body

if Response == "Whitelisted!" then

    print("Whitelisted!")

end