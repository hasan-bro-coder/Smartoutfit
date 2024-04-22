<template>
    <div class="grid">
        <div class="col">
            <h1>smart outfit</h1>
            <p>made by hasan</p>
        </div>
        <div class="col">
            <h1>contact us</h1>
            <ul>
                <li>hasanur23910@gmail.com</li>
                <li>017143319XXX</li>
                <li>bangladesh,tangail,idk</li>
            </ul>
        </div>
        <div class="col">
            <h1>quick links</h1>
            <a href="">/admin</a>
        </div>
        <div class="col">
            <h1>Social page</h1>
            <ul>
                <li>
                    <a href="">facebook</a>
                </li>
                <li>
                    <a href="">twitter</a>
                </li>
                <li>
                    <a href="">instagram</a>
                </li>
                <li>
                    <a href="">youtube</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="bottom">made by hasan</div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.grid{
    margin-top: 100px;
    height: 100%;
    gap:20px;
    background-color: rgb(78, 78, 78);
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-template-rows: 300px 300px 300px 300px;
    h1{
        font-size: clamp(18px,3vw,40px); 
       
    }
}
.bottom{
    width: 100vw;
    background-color: #00bd7e;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
}
</style>