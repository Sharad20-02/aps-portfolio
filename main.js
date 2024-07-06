document
  .getElementById('whySpotify')
  .addEventListener('click', function (event) {
    event.preventDefault();
    document
      .getElementById('whySpotifyContent')
      .scrollIntoView({ behavior: 'smooth' });
  });

document
  .getElementById('homeButton')
  .addEventListener('click', function (event) {
    event.preventDefault();
    document
      .getElementById('homeContent')
      .scrollIntoView({ behavior: 'smooth' });
  });

document
  .getElementById('functionalityButton')
  .addEventListener('click', function (event) {
    event.preventDefault();
    document
      .getElementById('functionalityContent')
      .scrollIntoView({ behavior: 'smooth' });
  });

document
    .getElementById('function1')
    .addEventListener('click', function(event){
        event.preventDefault();
        window.location.href =
          'https://github.com/Sharad20-02/Basic-Implementation/blob/main/MergeSort.java';
});

document
  .getElementById('function2')
  .addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href =
      'https://github.com/Sharad20-02/Basic-Implementation/blob/main/FisherYatesShuffleAlgorithm.java';
  });

  document
    .getElementById('function3')
    .addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href =
        'https://github.com/Sharad20-02/Basic-Implementation/blob/main/LevenshteinDistance.java';
    });
    
    document
      .getElementById('function4')
      .addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href =
          'https://github.com/Sharad20-02/Basic-Implementation/blob/main/SoundexSearch.java';
      });

      document
        .getElementById('function5')
        .addEventListener('click', function (event) {
          event.preventDefault();
          window.location.href =
            'https://github.com/Sharad20-02/Basic-Implementation/blob/main/QueueManagement.java';
        });

        document
          .getElementById('function6')
          .addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href =
              'https://github.com/Sharad20-02/Basic-Implementation/blob/main/PlaylistManagement.java';
          });

      document
        .getElementById('githubLink')
        .addEventListener('click', function (event) {
          event.preventDefault();
          window.location.href =
            'https://github.com/Sharad20-02';
        });
