<script>
    /** @type { { sight: string } } */
    let { sight } = $props();

    let shortenedSight = $state(sight);

    let isSelected = $state(false);
    const isTree = sight == 'tree';

    /** @type {[HTMLParagraphElement?, HTMLButtonElement?]} */
    let [p, box] = [];

    $effect(() => {
        if (!p || !box) return;
        const { font } = getComputedStyle(p);
        const { width: totalWidth, borderWidth } = getComputedStyle(box);
        const boxWidth = parseFloat(totalWidth) - 2 * parseFloat(borderWidth);
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) return;

        /** @param {string} text - the string to measure */
        const textWidth = text => {
            context.font = font;
            const metrics = context.measureText(text);
            return metrics.width;
        };

        const words = sight.split(' ');
        shortenedSight = words
            .map(word => {
                let shortenedWord = word;
                while (textWidth(shortenedWord) > boxWidth) {
                    word = word.slice(0, word.length - 1);
                    shortenedWord = word + '-';
                }

                return shortenedWord;
            })
            .join(' ');
    });
</script>

<button
    class={isSelected || isTree ? 'has-background-primary-light' : ''}
    onclick={() => (isSelected = !isSelected)}
    bind:this={box}
>
    <p title={sight} bind:this={p} class={isSelected || isTree ? 'has-text-primary' : ''}>
        {shortenedSight}
    </p>
</button>

<style>
    button {
        background: none;
        padding: 2px;
        margin: 0;
        aspect-ratio: 1;
        display: flex;

        border: 1px solid darkgray;
        align-items: center;
        justify-content: center;

        border-radius: 0;
    }

    p {
        width: fit-content;
        height: fit-content;

        font-size: 1em;
        line-height: 1.25em;
        text-align: center;
    }
</style>
