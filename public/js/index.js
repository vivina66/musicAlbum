window.onload = function() {
    var upAddBg = document.querySelector('.up_add_bg')

    // 添加歌曲部分
    var musicList = [
        '好想好想.mp3',
        '为爱痴狂.mp3',
        '修炼爱情-林俊杰.mp3',
        '至少还有你.mp3'
    ]

    var mList = document.querySelector('.mList')
        // 动态添加歌曲列表内容  li和span
    for (item in musicList) {
        radio = document.createElement('input')
        mli = document.createElement('li')
        mspan = document.createElement('span')
        console.log(musicList[item])
        mspan.innerText = musicList[item]
        radio.type = 'radio'
        radio.name = 'music'
        radio.className = 'music'
        radio.value = item
        mli.appendChild(radio)
        mli.appendChild(mspan)
        mList.appendChild(mli)
    }
    //====================================================

    var confirm = document.querySelector('.confirm')
    confirm.onclick = function() {
            console.log('inmmmmmmm')
            var radios = document.querySelectorAll('.music')
            var index = 0;
            for (i in radios) {
                if (radios[i].checked) {
                    index = i
                }
            }
            location.href = 'play.html'
                // 把索引和歌曲名的数组存起来
            sessionStorage.setItem('index', index)
            sessionStorage.setItem('musicList', musicList)
        }
        // =================================================
        //    上传文件部分
    var fImage = document.querySelector('.fImage')
    console.log(upAddBg)
    upAddBg.onclick = function() {
        fImage.click()
    }
    fImage.onchange = function() {
        if (this.files.length < 5) {
            alert('最少选择5张照片')
            this.value = ''
            clearTimeout('timer')
        } else {
            upAddBg.innerText = '已选择' + this.files.length + '张图片'
            var results = [];
            for (let i = 0; i < this.files.length; i++) {
                if (window.FileReader) {
                    var fr = new FileReader();
                    fr.onloadend = function(e) {
                        results.push(e.target.result + '|')
                    }
                    fr.readAsDataURL(fImage.files[i]);
                }
            }
            var timer = setTimeout(function() {
                sessionStorage.setItem('mu', results)
            }, 400)
        }
    }
}