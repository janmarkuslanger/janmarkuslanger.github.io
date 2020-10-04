<template>
    <div class="page">
        <ArticleElement>
            <TextElement title="Contact">
                <ul>
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                </ul>
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
