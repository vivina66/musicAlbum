window.onload = function() {
    var btnPlay = document.querySelector('.btnPlay')
    var btnOver = document.querySelector('.btnOver')
    var box = document.querySelector('.box')
    var au = document.querySelector('.au')
    var mask = document.querySelector('.mask')
    var endTab = document.querySelector('.endTab')
    var back = document.querySelector('.back')
    var img = document.querySelector('.imgbase')
    var timer = null
    btnPlay.onclick = function() {
        au.play()
        clearInterval(timer);
        timer = setInterval(timeFn, 3000);
    }
    btnOver.onclick = function() {
        au.pause();
        endMusic()
    }
    back.onclick = function() {
        location.href = 'index.html'
    }

    var imgBaseClass = 'imgbase'
    var imgList = []
    var sr = sessionStorage.getItem('mu').split('|,')

    for (var i = 0; i < sr.length; i++) {
        if (i == sr.length - 1) {
            imgList.push(sr[i].substr(0, sr[i].length - 1))
        } else {
            imgList.push(sr[i])
        }
    }
    // 获取所选歌曲的index
    var index = sessionStorage.getItem('index')
    var musicList = sessionStorage.getItem('musicList').split(',')
    var songPathpre = '../music/'
    au.src = songPathpre + musicList[index]
    var animationNum = 0;
    var imgNum = 0
    var imglen = imgList.length


    var timeFn = function() {
        console.log(songTime + '--时长--')
        if (animationNum == 4) {
            animationNum = 1
        } else {
            animationNum += 1
        }
        if (imgNum == imglen - 1) {
            imgNum = 0
        } else {
            imgNum += 1
        }
        img.src = imgList[imgNum]
        if (img.width > 1150) {
            img.style.width = 1150 + 'px'
        } else if (img.height > 580) {
            img.style.height = 580 + 'px'
        }
        img.className = imgBaseClass + ' ' + 'imgAnimation' + animationNum
    };


    au.addEventListener("canplay", function() { //设置监听，点击时获取时长
        songTime = parseInt(au.duration);
    });
    au.addEventListener('ended', function() {
        endMusic()

    })

    function endMusic() {
        clearInterval(timer)
        img.src = ''
        mask.style.display = 'block'
        endTab.style.display = 'block'
    }
}