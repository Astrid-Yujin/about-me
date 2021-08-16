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
            title="personal information"
            :infos="personalInfo"
          />
          <info-block
            title="languages"
            :infos="languageSkills"
          />
          <info-block
            title="professional Skills"
            :infos="professionalSkills"
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
          />
          <timeline
            title="Education"
            :items="education"
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
import ResumeBlock from '../components/work/ResumeBlock.vue';
import InfoBlock from '../components/work/InfoBlock.vue';
import Timeline from '../components/work/Timeline.vue';
import PosterWall from '../components/work/PosterWall.vue';

export default {
  name: 'work',
  components: {
    ResumeBlock,
    InfoBlock,
    Timeline,
    PosterWall,
  },
  props: {
    headline: {
      type: String,
      default: 'Yujin Wang',
    },
    subHeadline: {
      type: String,
      default: 'A happy frontend developer :)',
    },
  },
  // Backend TODO: replace dummy data
  data() {
    return {
      personalInfo: {
        name: 'Yujin Wang',
        job: 'Frontend Developer',
        address: 'Gottliebstraße 10, 70186,<br/> Stuttgart Germany',
        email: 'astrid.wangyujin@gmail.com',
      },
      languageSkills: {
        English: 'Fluent',
        Germany: 'Basic',
        Chiniese: 'Native',
      },
      professionalSkills: {
        JavaScript: 70,
        HTML: 80,
        'CSS/SCSS': 80,
        VueJs: 60,
        Magento2: 70,
        'C#': 50,
      },
      workExperience: [
        {
          period: '08.2019 - now',
          title: 'Frontend developer',
          institution: {
            name: 'Y1 Digital AG, Stuttgart',
            url: 'https://www.y1.de/',
          },
        },
        {
          period: '08.2017 - 10.2018',
          title: 'Work Student',
          institution: {
            name: 'Robert Bosch GmbH, Lenberg',
            url: 'https://www.bosch.com/',
          },
        },
      ],
      education: [
        {
          period: '10.2015 - 11.2018',
          title: 'Master of Science',
          institution: {
            name: 'Universtät Stuttgart, Germany',
            url: 'https://www.uni-stuttgart.de/de/',
          },
        },
        {
          period: '09.2011 - 06.2015',
          title: 'Bachelor of Science',
          institution: {
            name: 'Dalian University of Technology, China',
            url: 'https://en.dlut.edu.cn/',
          },
        },
        {
          period: '02.2013 - 07.2013',
          title: 'Exchange study',
          institution: {
            name: 'National Yunlin University of Science and Technology, Taiwan',
            url: 'https://www.cm.yuntech.edu.tw/English/index.php',
          },
        },
      ],
      projects: [
        {
          year: '2021',
          title: 'Fanatec',
          link: 'https://fanatec.com/eu-de',
        },
        {
          year: '2021',
          title: 'Rieker',
          link: 'https://www.rieker.com/shop/',
        },
        {
          year: '2020',
          title: 'Labaxetta',
          link: 'https://www.labaxetta.com/',
        },
        {
          year: '2020',
          title: 'Maryan Beachwear',
          link: 'https://www.maryanmehlhorn.com/',
        },
        {
          year: '2020',
          title: 'Ahlers',
          link: 'https://www.baldessarini.com/de/',
        },
      ],
    };
  },
  beforeRouteEnter(to, from, next) {
    next(() => {
      document.body.className = to.meta.bodyClass;
    });
  },
};
</script>
