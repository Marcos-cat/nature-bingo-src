<script>
    import { sights } from './sights';
    import SightBox from './SightBox.svelte';
    import { board } from './generateBoard';
</script>

<div class="container">
    {#each board(sights) as sight}
        <SightBox {sight} />
    {/each}
</div>

<style>
    .container {
        border: 1px solid darkgray;
        width: 90vw;
        max-width: 350px;
        margin: auto;
        margin-top: 5vw;
        display: grid;
        grid-template-columns: repeat(5, 20%);
        padding: 0;

        gap: 0;
    }
</style>
