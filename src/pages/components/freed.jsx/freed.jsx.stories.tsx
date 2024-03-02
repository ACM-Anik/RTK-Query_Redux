import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {freed.jsx} from './freed.jsx';

const meta: Meta<typeof freed.jsx> = {
  component: freed.jsx,
};

export default meta;

type Story = StoryObj<typeof freed.jsx>;

export const Basic: Story = {args: {}};
