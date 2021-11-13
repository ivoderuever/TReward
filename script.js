let rewardBar;
function observe() {
    setTimeout(() => {
        try {
            rewardBar = document.querySelector(".chat-input__buttons-container");
            observer.observe(rewardBar, config);
            console.log("Connected to points")
        } catch (error) {
            observe();
        }
    }, 5000);
}

const config = { attributes: true, childList: true, subtree: true };

const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.target.querySelector('.claimable-bonus__icon')) {
            let rewardBtn = document.querySelector(".claimable-bonus__icon");
            if (rewardBtn != null) {
                rewardBtn.click();
            }
        }
    }
};

const observer = new MutationObserver(callback);

observe();

setInterval(() => {
    console.log("Reconnecting auto claimer");
    observer.disconnect();
    observe();
}, 60 * 1000)