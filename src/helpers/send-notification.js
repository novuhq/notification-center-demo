import { Novu } from '@novu/node';

const novu = new Novu('11a8c44ffd4f1ef1a88cc688abd6e770'); // process.env.NOVU_API_KEY

const sendNotification = async (triggerName, userId, payload) => 
  // const currentUuid = localStorage.getItem('uuid');

   novu.trigger(triggerName, {
    to: {
      subscriberId: '55403046-fee9-43a6-9489-2bee5fee2e81',
    },
    payload,
  })

  // const myHeaders = new Headers();
  // // myHeaders.append('Accept', '*/*');
  // myHeaders.append('Content-Type', 'application/json');
  // myHeaders.append('Authorization', 'ApiKey 11a8c44ffd4f1ef1a88cc688abd6e770');
  //
  // const bodyRaw = JSON.stringify({
  //   name: 'test',
  //   to: {
  //     subscriberId: '11d75422-bf6e-4ddc-81dc-40230fb61612',
  //   },
  //   payload: {
  //     token:
  //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ2YjNkYTI3ZDUwZGVhMGI5NzI2MTAiLCJmaXJzdE5hbWUiOiJyb21hbiIsImxhc3ROYW1lIjoieWFzZWwiLCJlbWFpbCI6InN0cm9nb2ZjZG1AZ21haWwuY29tIiwicHJvZmlsZVBpY3R1cmUiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTM4NzQ2MDE_dj00Iiwib3JnYW5pemF0aW9uSWQiOiI2MzQ2YjNkYmUyYTJkZTgxZGYwODg4MTAiLCJyb2xlcyI6WyJhZG1pbiJdLCJlbnZpcm9ubWVudElkIjoiNjM0NmIzZGJlMmEyZGU4MWRmMDg4ODE1IiwiaWF0IjoxNjY1NTc3OTQ3LCJleHAiOjE2NjgxNjk5NDcsImlzcyI6Im5vdnVfYXBpIn0.ybqMjKpbTnUlXhEZlWd0uN-pcRmdwvFOogEiuvdLPAk',
  //   },
  // });
  //
  // const requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: bodyRaw,
  //   // mode: 'no-cors',
  // };
  //
  // fetch('https://api.novu.co/v1/events/trigger', requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log('error', error));
;

export default sendNotification;
