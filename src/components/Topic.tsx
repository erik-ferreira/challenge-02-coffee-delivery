import { LiHTMLAttributes, ReactNode } from "react";
import { IconProps } from "phosphor-react";

interface TopicProps {
  icon: React.FC<IconProps>;
  label: ReactNode;
  bgColor: string;
}

interface TopicComponentProps extends LiHTMLAttributes<HTMLLIElement> {
  topic: TopicProps;
}

export function Topic({ topic, className, ...rest }: TopicComponentProps) {
  const { icon: Icon, label, bgColor } = topic;

  return (
    <li className={`flex items-center gap-3 ${className}`} {...rest}>
      <div
        className={`min-w-[2rem] min-h-[2rem] rounded-full flex items-center justify-center ${bgColor}`}
      >
        <Icon size={20} weight="fill" className="fill-white" />
      </div>

      {label}
    </li>
  );
}
