<template>
    <div class="page">
        <ArticleElement>
            <TextElement title="Hello, my name is Jan.">
                <p>I am a software engineer based in germany.</p>
            </TextElement>
        </ArticleElement>
    </div>
</template>

<script>

import ArticleElement from '@/components/article-element.vue';
import TextElement from '@/components/text-element.vue';

export default {
    components: {
        ArticleElement,
        TextElement
    }
}
</script>
