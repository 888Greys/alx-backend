#!/usr/bin/node

import { expect } from 'chai';
import kue from 'kue';
import createPushNotificationsJobs from '../8-job.js';

describe('createPushNotificationsJobs', () => {
  let queue;

  beforeEach(() => {
    queue = kue.createQueue();
    queue.testMode.enter();
  });

  afterEach(() => {
    queue.testMode.exit();
  });

  it('should throw an error if jobs is not an array', () => {
    expect(() => createPushNotificationsJobs({}, queue)).to.throw(Error, 'Jobs is not an array');
  });

  it('should create jobs in the queue', () => {
    const jobs = [
      { phoneNumber: '4153518780', message: 'Notification 1' },
      { phoneNumber: '4153518781', message: 'Notification 2' },
    ];

    createPushNotificationsJobs(jobs, queue);

    const jobIds = queue.testMode.jobs.map(job => job.id);
    expect(jobIds).to.have.lengthOf(2);
  });

  it('should create jobs with correct data', () => {
    const jobs = [
      { phoneNumber: '4153518780', message: 'Notification 1' },
    ];

    createPushNotificationsJobs(jobs, queue);

    const job = queue.testMode.jobs[0];
    expect(job.data).to.deep.equal(jobs[0]);
  });
});