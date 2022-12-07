
function jsFunction(value) {
    const data = [
        {
            "image": "https://www.reliancedigital.in/medias/OnePlus-Nord-CE-2-Lite-5G-Mobile-Phones-492850035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NzM0OTR8aW1hZ2UvcG5nfGltYWdlcy9oMGMvaDcwLzk4NzM5MjkxNzUwNzAucG5nfDc4M2YwMWRmMmYzYTJjZjgyYjk5ZjViYTk1ODY2NDdjMWEwN2VmMDlmMzlhZDAzMDNhZTY2MDRlZjM2NThhMGM",
            "description": "fdgdfhhjdffdj \nprice 10010",
            "price": 10010
        },
        {
            "image": "https://www.reliancedigital.in/medias/OnePlus-Nord-CE-2-Lite-5G-Mobile-Phones-492850035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NzM0OTR8aW1hZ2UvcG5nfGltYWdlcy9oMGMvaDcwLzk4NzM5MjkxNzUwNzAucG5nfDc4M2YwMWRmMmYzYTJjZjgyYjk5ZjViYTk1ODY2NDdjMWEwN2VmMDlmMzlhZDAzMDNhZTY2MDRlZjM2NThhMGM",
            "description": "dbjfh \n price 1001",
            "price": 1001
        },
        {
            "image": "https://www.reliancedigital.in/medias/OnePlus-Nord-CE-2-Lite-5G-Mobile-Phones-492850035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NzM0OTR8aW1hZ2UvcG5nfGltYWdlcy9oMGMvaDcwLzk4NzM5MjkxNzUwNzAucG5nfDc4M2YwMWRmMmYzYTJjZjgyYjk5ZjViYTk1ODY2NDdjMWEwN2VmMDlmMzlhZDAzMDNhZTY2MDRlZjM2NThhMGM",
            "description": "dbjfh \n price 1005",
            "price": 1005
        }
    ]
    data.sort((a, b) => {
        return a.price - b.price;
    });

    let list = document.getElementById("ulList");
    list.innerHTML = ''
    data.forEach((item) => {
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.setAttribute("class", "img");
        let img = document.createElement("img");
        img.setAttribute("src", item.image);
        img.setAttribute("alt", "product");
        img.setAttribute("width", "200");
        img.setAttribute("height", "200");
        div.appendChild(img);
        li.append(div)
        let desc = document.createElement("div");
        desc.setAttribute("class", "description");
        desc.innerText = item.description;
        li.append(desc);
        list.appendChild(li);
    })

}