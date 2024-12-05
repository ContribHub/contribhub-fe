import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button'; // Button 컴포넌트 경로에 맞게 수정

const meta = {
  title: 'Components/Button', // Storybook에서 나타날 그룹 이름
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['white', 'black'], // 선택 가능한 옵션
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'], // 선택 가능한 옵션
    },
    onClick: {}, // 클릭 이벤트 로그 확인용
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '로그인',
    variant: 'black',
    size: 'medium',
  },
};

export const WhiteButton: Story = {
  args: {
    label: '로그인',
    variant: 'white',
    size: 'medium',
  },
};

export const SmallBlackButton: Story = {
  args: {
    label: '로그인',
    variant: 'black',
    size: 'small',
  },
};

export const LargeWhiteButton: Story = {
  args: {
    label: '로그인',
    variant: 'white',
    size: 'large',
  },
};
