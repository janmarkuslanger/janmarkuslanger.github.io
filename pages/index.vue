<template>
    <div class="page">
        <ArticleElement>
            <TextElement title="Hello, my name is Jan.">
                <p>I am a software engineer based in germany.</p>
                <p>Currently I am working as a frontend engineer @brandung.</p>
                <p>In my freetime I try to improve myself with learning new <br>things about software architecture, testing and new technologies.</p>
                <p>Write a <a href="mailto:janmarkuslanger10121994@gmail.com">email</a> or visit my <a href="https://github.com/janmarkuslanger">github</a> page.</p>
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
