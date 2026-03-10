import { SVGProps } from "react";

export function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      {/* Icon from Fluent UI System Icons by Microsoft Corporation - https://github.com/microsoft/fluentui-system-icons/blob/main/LICENSE */}
      <path
        fill="currentColor"
        d="M15 11.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5V8.947A3.5 3.5 0 0 0 3.5 10H7v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V10h3.5c.98 0 1.865-.404 2.5-1.053zM9.25 1c.966 0 1.75.784 1.75 1.75V4h1.5a2.5 2.5 0 0 1 0 5H9v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V9H3.5a2.5 2.5 0 0 1 0-5H5V2.75C5 1.784 5.784 1 6.75 1zm-2.5 1a.75.75 0 0 0-.75.75V4h4V2.75A.75.75 0 0 0 9.25 2z"
      />
    </svg>
  );
}

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE */}
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      />
    </svg>
  );
}
