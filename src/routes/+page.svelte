<script>
    import sights from './sights';

    /** @param {readonly string[]} arr */
    function shuffleArray(arr) {
        let array = [...arr];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function grid() {
        let sightsCopy = shuffleArray(sights);

        sightsCopy[12] = 'tree';

        return sightsCopy.splice(0, 25);
    }
</script>

<div class="container">
    {#each grid() as item}
        <div class="box">{item}</div>
    {/each}
</div>

<style>
    .container {
        width: 90vw;
        margin: auto;
        margin-top: 5vw;
        display: grid;
        grid-template-columns: repeat(5, 20%);
        padding: 0;

        gap: 0;
    }

    .box {
        padding: auto;
        aspect-ratio: 1;
        margin: 0;
        display: flex;
        border: 1px solid darkgray;
        align-items: center;
        border-radius: 0;
        overflow: auto;
        text-align: center;
        font-size: 1em;
        line-height: 1em;
    }
</style>
