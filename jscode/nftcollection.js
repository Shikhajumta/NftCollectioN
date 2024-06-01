let nftInventory = [];


function mintNFT(title, details, creatorName, creatorEmail, creatorLocation) {
    const nftItem = {
        title: title,
        details: details,
        creator: {
            name: creatorName,
            email: creatorEmail,
            location: creatorLocation
        }
    };
    nftInventory.push(nftItem);
}



function listNFTs() {
    nftInventory.forEach(nftItem => {
        console.log("Title: " + nftItem.title);
        console.log("Details: " + nftItem.details);
        console.log("Creator: " + nftItem.creator.name);
        console.log("Creator Email: " + nftItem.creator.email);
        console.log("Creator Location: " + nftItem.creator.location);
        console.log("-----------------------------");
    });
}



function getTotalSupply() {
    console.log("Total Supply: " + nftInventory.length);
}

mintNFT(
    "Nature's Symphony",
    "A breathtaking photograph capturing the essence of a sunrise over the mountains.",
    "Shikha",
    "jumtashikha000@gmail.com",
    "Himachal Pradesh"
);

mintNFT(
    "Fantasy World Map",
    "An intricate map of a fantasy world, complete with mythical creatures and hidden treasures.",
    "Sakshi",
    "sakshi@gmail.com",
    "Uttrakhand"
);

mintNFT(
    "Sci-Fi Short Story",
    "A thrilling short story set in a futuristic dystopian world.",
    "Samuel",
    "samuel@gmail.com",
    "Chicago"
);


listNFTs();
getTotalSupply();