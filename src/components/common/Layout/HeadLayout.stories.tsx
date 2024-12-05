import type { Meta, StoryObj } from '@storybook/react';
import HeadLayout from './HeadLayout'; // Button 컴포넌트 경로에 맞게 수정

const meta = {
  title: 'Layout/HeadLayout', // Storybook에서 나타날 그룹 이름
  component: HeadLayout,
} satisfies Meta<typeof HeadLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>컨텐츠 영역</div>,
  },
};
