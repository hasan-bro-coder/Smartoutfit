<template>
    <div class="grid">
        <div class="col">
            <h1>smart outfit</h1>
            <p>made by hasan</p>
        </div>
        <div class="col">
            <h1>contact us</h1>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
        <div class="col">
            <h1>quick links</h1>
            <a href="">/admin</a>
        </div>
        <div class="col">
            <h1>Social page</h1>
            <a href="">facebook</a>
            <a href="">insta</a>
            <a href="">twitter</a>
            <a href="">youtube</a>
        </div>
    </div>

</template>
<script>
export default {

}
</script>
<style scoped>
.grid{
    margin-top: 100px;
    height: 300px;
    background-color: rgb(78, 78, 78);
    display: grid;
    grid-template-columns: repeat(4,1fr);
    h1{
        font  
    }
}
</style>