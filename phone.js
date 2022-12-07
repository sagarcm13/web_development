function js1Function(value) {

    const dat = [
        {
            "imgurl": "https://m.media-amazon.com/images/I/71UqqpGVheL._SL1500_.jpg",
            "description": "OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)",
            "price": 25000
        },
        {
            "imgurl": "https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/mobile/y/u/s/-original-imagetmefgcxw2ye.jpeg?q=70",
            "description": "Realme GT Neo 2 128 GB (Neo Blue, 8 GB RAM)",
            "price": 30000
        },
        {
            "imgurl": "https://m.media-amazon.com/images/I/31TCJmM4+mL._SX342_SY445_.jpg",
            "description": "Apple iPhone 13 Pro (1TB) - Sierra Blue",
            "price": 2000
        },
        {
            "imgurl": "https://m.media-amazon.com/images/I/71madl67atL._SX679_.jpg",
            "description": "Nothing Phone (1) 5G (White, 256 GB) (12 GB RAM)",
            "price": 15000
        },
        {
            "imgurl": "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662434970/Croma%20Assets/Communication/Mobiles/Images/252420_gpezur.png/mxw_1366,f_auto",
            "description": "OnePlus 10R 5G (12GB RAM, 256GB, Forest Green)",
            "price": 20000
        },
        {
            "imgurl": "https://m.media-amazon.com/images/I/41YFUk64EzL._SX300_SY300_QL70_FMwebp_.jpg",
            "description": "iQOO 9 SE 5G (Space Fusion, 8GB RAM, 128GB Storage) | Qualcomm Snapdragon 888 | 66W Flash Charge",
            "price": 28000
        },
        {
            "imgurl": "https://m.media-amazon.com/images/I/61OJJSFEkBL._SX679_.jpg",
            "description": "Google Pixel 6 (Black, 8GB RAM, 128GB Storage)",
            "price": 24000
        },
        {
            "imgurl": "https://img3.gadgetsnow.com/gd/images/products/additional/large/G115883_View_3/mobiles/smartphones/vivo-y12-64-gb-aqua-blue-3-gb-ram-.jpg",
            "description": "Vivo Y12 64 GB (Aqua Blue, 6 GB RAM)",
            "price": 22000
        },
        {
            "imgurl": "https://opsg-img-cdn-gl.heytapimg.com/epb/202207/07/jw1Ya3hCu1TTGupj.png?x-amz-process=image/format,webp/quality,Q_80",
            "description": "OPPO Reno7 Pro 5G 8GB RAM 256GB Storage",
            "price": 23000
        }
    ]
    dat.sort((a, b) => {
        return a.price - b.price;
    });
    console.log(dat);
    let list = document.getElementById("ulList");
    list.innerHTML = ''
    dat.forEach((item) => {
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.setAttribute("class", "img");
        let img = document.createElement("img");
        img.setAttribute("src", item.imgurl);
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
