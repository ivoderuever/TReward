console.log('loaded');

setInterval(() => {
    console.log('trigered');
    //Reward button element
    let rewardBtn = document.querySelector(".claimable-bonus__icon");

    if(rewardBtn != null) {
        rewardBtn.click();
    }
}, 30 * 1000)