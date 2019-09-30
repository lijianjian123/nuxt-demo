import {isPc} from '~/utils'
function setRem(){
  let clientWidth = document.documentElement.clientWidth
  let htmlDom = document.getElementsByTagName('html')[0]
  let width
  if(isPc()) {
    width = clientWidth < 1136 ? 1136 : clientWidth
    htmlDom.style.fontSize = width/1920 *100+'px' //1920设计稿的尺寸
    htmlDom.style.minWidth = '1136px'
  }else {
    width = clientWidth > 750 ? 750 : clientWidth
    htmlDom.style.fontSize = width/750 *100 + 'px' //750设计稿的尺寸
    htmlDom.style.minWidth = '750px'
  }

}
setRem()
window.addEventListener('resize', function () {
  setRem()
})
