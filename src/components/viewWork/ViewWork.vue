<template>
  <div class="work page-content">
    <div id="background-wrapper">
      <div class="cloud-container cloud1">
        <div class="cloud"></div>
      </div>
      <div class="cloud-container cloud2">
        <div class="cloud"></div>
      </div>
      <div class="cloud-container cloud3">
        <div class="cloud"></div>
      </div>
      <div class="cloud-container cloud4">
        <div class="cloud"></div>
      </div>
      <div class="cloud-container cloud5">
        <div class="cloud"></div>
      </div>
    </div>
    <div class="row">
      <div class="row-content">
        <resume-block
          class="about-me"
          title="About Me"
        >
          <info-block
            class="personal-information is-half"
            title="Personal Information"
            :infos="personalInfo"
          />
          <info-block
            class="languages is-half"
            title="Languages"
            :infos="languageSkills"
          />
          <info-block
            class="profession-skills"
            title="Professional Skills"
            :infos="professionalSkills"
            progressBarType="line"
            ref="progressLineContainer"
          />
          <info-block
            class="frameworks"
            title="Frameworks"
            :infos="frameworks"
            progressBarType="chart"
          />
        </resume-block>
      </div>
    </div>

    <div class="row">
      <div class="row-content">
        <resume-block
          title="Timeline"
        >
          <timeline
            title="Work Experience"
            :items="workExperience"
            iconType="laptop"
          />
          <timeline
            title="Education"
            :items="education"
            iconType="pen"
          />
        </resume-block>
      </div>
    </div>

    <div class="row">
      <div class="row-content">
        <resume-block
          title="Projects"
        >
          <poster-wall
            title="2021"
            :items="projects.filter((project) => project.year == '2021')"
          >
          </poster-wall>
          <poster-wall
            title="2020"
            :items="projects.filter((project) => project.year == '2020')"
          >
          </poster-wall>
        </resume-block>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import store from '../../store/index';
import ResumeBlock from '../resumeBlock/ResumeBlock.vue';
import InfoBlock from '../infoBlock/InfoBlock.vue';
import Timeline from '../timeline/Timeline.vue';
import PosterWall from '../posterWall/PosterWall.vue';

export default {
  name: 'Work',
  components: {
    ResumeBlock,
    InfoBlock,
    Timeline,
    PosterWall,
  },
  data() {
    return {
      personalInfo: [],
      languageSkills: [],
      professionalSkills: [],
      frameworks: [],
      workExperience: [],
      education: [],
      projects: [],
    };
  },
  created() {
    axios.defaults.baseURL = 'https://about-me-de1da-default-rtdb.europe-west1.firebasedatabase.app';

    axios.get('/workPage.json')
      .then((res) => {
        const { data } = res;
        this.personalInfo = data.personalInfo;
        this.languageSkills = data.languageSkills;
        this.professionalSkills = data.professionalSkills;
        this.frameworks = data.frameworkSkills;
        this.workExperience = data.workExperience;
        this.education = data.education;
        this.projects = data.projects;
        store.commit('finishPageLoading');
      })
      // eslint-disable-next-line
      .catch((error) => alert(error));
  },
  mounted() {
    store.commit('startPageLoading');
  },
  beforeRouteEnter(to, from, next) {
    next(() => {
      document.body.className = to.meta.bodyClass;
    });
  },
  beforeDestroy() {
    store.commit('finishPageLoading');
  },
};
</script>
