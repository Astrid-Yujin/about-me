<template>
  <div class="work">
      <div class="row">
        <div class="row-content">
          <h1>work</h1>
          <resume-block
            title="About Me"
          >
            <info-block
              class="col-6"
              title="personal information"
              :infos="personalInfo"
            />
            <info-block
              class="col-6"
              title="languages"
              :infos="languageSkills"
            />
            <info-block
              class="col-6"
              title="professional Skills"
              :infos="professionalSkills"
            />
          </resume-block>
          
          <resume-block
            title="Timeline"
          >
            <timeline 
              title="Work Experience"
              :items="workExperience"
            />
          </resume-block>

          <resume-block
            title="Projects"
          >

          </resume-block>
        </div>
    </div>
  </div>
</template>

<script>
import ResumeBlock from './ResumeBlock';
import InfoBlock from './InfoBlock';
import Timeline from './Timeline';

export default {
  name: 'work',
  components: {
    ResumeBlock,
    InfoBlock,
    Timeline,
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
          position: 'Frontend developer',
          company: {
            name: 'Y1 Digital AG, Stuttgart',
            url: 'https://www.y1.de/',
          },
        },
        {
          period: '08.2017 - 10.2018',
          position: 'Work Student',
          company: {
            name: 'Robert Bosch GmbH, Lenberg',
            url: 'https://www.bosch.com/',
          },
        },
      ],
    };
  },
};
</script>
