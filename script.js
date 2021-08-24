setInterval(() => {
    //Reward button element
    let rewardBtn = document.querySelector(".claimable-bonus__icon");

    if(rewardBtn != null) {
        rewardBtn.click();
    }
}, 60 * 1000)