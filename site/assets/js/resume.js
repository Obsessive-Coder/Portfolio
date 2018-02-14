$(document).ready(function() {
  // Store skills in an array.
  const skills = [
      'Object Oriented Programming',
      'Software Development',
      'HTML 5',
      'CSS 3',
      'Javascript',
      'JQuery',
      'Bootstap 3',
      'Critical Thinking',
      'Problem Solving',
      'Time Management',
      'Self-motivated',
      'AJAX',
      'JSON',
      'Git',
      'Bootstrap 4',
      'MYSQL',
      'Visual Basic',
      'Asp.Net',
      'Visusal Studio',
      'Android Studio',
      'Project Management',
      'Project Planning',
      'Requirements Gathering'
  ];

  const additionals = [
    'Extremely dedicated and committed to software development.',
    'Wanting to commit to a company.',
    'Colleague and supervisor reviews available.',
    'Willing to relocate.',
    'Pursuing computer science degree after I relocate.',
    'Authorized to work in the US for any employer.'
  ];

  const jobs = [
    [
      'Regularly use time-management, leadership, and communication skills in a web development environment.',
      'Perform administrative activities like taking attendance, and grading assignments and projects',
      'Work with the instructor to implement lessons following school’s curriculum, goals, objectives, and philosophies',
      'Consistently engage students during in-class activities to encourage social, emotional, and intellectual conversations and ideas',
      'Tutor students individually to reinforce learning concepts',
      'Assist with teaching 30 students per class',
      'Supported colleagues in implementing an appropriate plan for a struggling student'
    ],
    [
      'More than 100 tutoring sessions.',
      'Average session length is twice the required length.',
      'Excellent student reviews from each tutoring session.',
      'More than a web development tutor, I am a mentor to future Software Engineers in our industry.',
      'This experience has increased my knowledge, improved my communication skills, and really solidified my understanding of web development.',
      'Constantly studying the program\'s curriculum to give the most value to each student.'
    ],
    [
      'Quickly learned how to learn on the job.',
      'Developed problem-solving, team-work, and self-motivation skills.',
      'Consistently assumed additional responsibilities and worked extended hours to meet project deadlines.'
    ],
    [
      'Shift manager for 1 year.',
      'Developed time-management, delegation, and leadership skills in a fast-paced environment.',
      'Oversaw and directed kitchen staff of 5-7 teammates during a 6-8 hour shift.',
      'Ensured teammates understood expectations and responsibilities',
      'Delegated tasks to teammates'
    ]
  ];

  const listItemHTML = '<li>[CONTENT]</li>';

  // Show Skills
  function showSkills() {
    // Loop through each skill list <ul> and add the skill html.
    var htmlSkillLists = $('.skills-container').children();
    var index = 0;
    for (let i = 0; i < skills.length; i++) {
      if (i >= Math.floor(skills.length / 2)) {
        index = 1;
      }
      $(htmlSkillLists[index]).append(listItemHTML.replace('[CONTENT]', skills[i]));
    }
  }

  function showAdditionals() {
    for (let i = 0; i < additionals.length; i++) {
      $('#additionals-list').append(listItemHTML.replace('[CONTENT]', additionals[i]));
    }
  }

  function showJobs() {
    showTaSkills();
    showTutorSkills();
    showRooferSkills();
    showCookSkills();

    function showTaSkills() {
      for (var i = 0; i < jobs[0].length; i++) {
        $('#ta-skills').append(listItemHTML.replace('[CONTENT]', jobs[0][i]));;
      }

    }

    function showTutorSkills() {
      for (var i = 0; i < jobs[1].length; i++) {
        $('#tutor-skills').append(listItemHTML.replace('[CONTENT]', jobs[1][i]));;
      }
    }

    function showRooferSkills() {
      for (var i = 0; i < jobs[2].length; i++) {
        $('#roofer-skills').append(listItemHTML.replace('[CONTENT]', jobs[2][i]));;
      }
    }

    function showCookSkills() {
      for (var i = 0; i < jobs[3].length; i++) {
        $('#cook-skills').append(listItemHTML.replace('[CONTENT]', jobs[3][i]));;
      }
    }
  }

  showSkills();
  showAdditionals();
  showJobs();
});
