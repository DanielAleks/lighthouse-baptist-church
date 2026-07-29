<template>
    <div>
        <WEHeader/>
        <TopBanner/>
        <FreeQuote/>
        <WhyChooseUs/>
        <SatisfactionGuaranteed/>
        <ExpertKnobAndTubeRewiring/>
        <ServingLocations/>
        <Questions/>
        <WeFooter/>
    </div>
</template>

<script>
import WEHeader from './knob-and-tube-components/WeHeader.vue';
import TopBanner from './knob-and-tube-components/WeTopBanner.vue';
import FreeQuote from './knob-and-tube-components/WeFreeQuote.vue';
import WhyChooseUs from './knob-and-tube-components/WeWhyChooseUs.vue';
import SatisfactionGuaranteed from './knob-and-tube-components/WeSatisfactionGuaranteed.vue';
import ExpertKnobAndTubeRewiring from './knob-and-tube-components/WeExpertKnobAndTubeWiring.vue';
import ServingLocations from './knob-and-tube-components/WeServingLocations.vue';
import Questions from './knob-and-tube-components/WeQuestions.vue';
import WeFooter from './knob-and-tube-components/WeFooter.vue';

export default {
  name: "WashingtonElectrical",
  components: {
    WEHeader,
    FreeQuote,
    TopBanner,
    WhyChooseUs,
    SatisfactionGuaranteed,
    ExpertKnobAndTubeRewiring,
    ServingLocations,
    Questions,
    WeFooter
  },
};
</script>