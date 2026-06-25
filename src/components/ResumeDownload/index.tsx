import DownloadPanel, { type DownloadOption } from '../DownloadPanel';

export type ResumeDownloadOption = DownloadOption;

export default function ResumeDownload({
  options,
}: {
  options: ResumeDownloadOption[];
}) {
  return (
    <DownloadPanel
      emptyHint="Resume upload pending. Add a PDF or DOCX to enable downloads."
      emptyPathLabel="public/resume/"
      options={options}
      successHint="Download my latest resume in your preferred format."
      title="Resume"
    />
  );
}
