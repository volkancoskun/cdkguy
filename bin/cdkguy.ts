#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkguyStack } from '../lib/cdkguy-stack';

const app = new cdk.App();
new CdkguyStack(app, 'CdkguyStack');



