import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CloudQueueRoundedIcon from '@mui/icons-material/CloudQueueRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import type { SvgIconComponent } from '@mui/icons-material';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Card, CardContent, Stack, Typography } from '@mui/material';

export type TechnologyIconName =
  | 'architecture'
  | 'backend'
  | 'cloud'
  | 'data'
  | 'frontend';

export type WorkExperience = {
  client?: string;
  collaboration?: string;
  company: string;
  country: {
    flag: string;
    name: string;
  };
  dates: string;
  duration: string;
  highlights: readonly string[];
  id: string;
  role: string;
  summary: string;
  technologies: readonly {
    icon: TechnologyIconName;
    label: string;
  }[];
};

const technologyIcons: Record<TechnologyIconName, SvgIconComponent> = {
  architecture: AccountTreeRoundedIcon,
  backend: DnsRoundedIcon,
  cloud: CloudQueueRoundedIcon,
  data: StorageRoundedIcon,
  frontend: CodeRoundedIcon,
};

function DateSummary({ experience }: { experience: WorkExperience }) {
  return (
    <Stack spacing={0.25}>
      <Typography color="text.primary" fontSize="0.8rem" fontWeight={800}>
        {experience.dates}
      </Typography>
      <Typography color="text.secondary" fontSize="0.75rem">
        {experience.duration}
      </Typography>
    </Stack>
  );
}

export default function WorkExperienceTimeline({
  experiences,
}: {
  experiences: readonly WorkExperience[];
}) {
  return (
    <Timeline
      aria-label="Nalin Padmasiri work experience"
      position="right"
      sx={{
        m: 0,
        mt: 3,
        p: 0,
        [`& .MuiTimelineItem-root:before`]: {
          display: { xs: 'none', md: 'block' },
          flex: { md: 0.34 },
          p: { md: '6px 16px' },
        },
      }}
    >
      {experiences.map((experience, index) => (
        <TimelineItem key={experience.id}>
          <TimelineOppositeContent
            sx={{
              display: { xs: 'none', md: 'block' },
              flex: 0.34,
              px: 2,
              py: 1.25,
            }}
          >
            <DateSummary experience={experience} />
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot
              color="primary"
              sx={{
                bgcolor: 'background.paper',
                borderWidth: 2,
                boxShadow: '0 0 0 4px rgba(2, 132, 199, 0.10)',
                my: 1.25,
              }}
              variant="outlined"
            >
              <BusinessCenterRoundedIcon fontSize="small" />
            </TimelineDot>
            {index < experiences.length - 1 ? (
              <TimelineConnector sx={{ bgcolor: 'primary.light', width: 2 }} />
            ) : null}
          </TimelineSeparator>

          <TimelineContent
            sx={{ minWidth: 0, pb: 3, pl: { xs: 2, sm: 3 }, pt: 0 }}
          >
            <Card
              component="article"
              variant="outlined"
              sx={{
                borderColor: 'divider',
                borderRadius: 2,
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 2, sm: 2.5 },
                  '&:last-child': { pb: { xs: 2, sm: 2.5 } },
                }}
              >
                <Stack display={{ xs: 'flex', md: 'none' }} mb={1.5}>
                  <DateSummary experience={experience} />
                </Stack>

                <Stack
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  direction={{ xs: 'column', sm: 'row' }}
                  gap={1}
                  justifyContent="space-between"
                >
                  <div>
                    <Typography
                      component="h3"
                      fontSize="1.1rem"
                      fontWeight={900}
                      lineHeight={1.3}
                    >
                      {experience.role}
                    </Typography>
                    <Typography
                      color="primary.dark"
                      fontSize="0.9rem"
                      fontWeight={800}
                      mt={0.5}
                    >
                      {experience.client
                        ? `${experience.client} via ${experience.company}`
                        : experience.company}
                    </Typography>
                  </div>
                  <Stack
                    aria-label={`${experience.country.name} work location`}
                    alignItems="center"
                    component="span"
                    direction="row"
                    gap={0.5}
                    sx={{
                      bgcolor: 'primary.50',
                      borderRadius: 999,
                      color: 'text.primary',
                      px: 1.25,
                      py: 0.5,
                    }}
                  >
                    <LocationOnRoundedIcon
                      color="action"
                      sx={{ fontSize: '1rem' }}
                    />
                    <Typography
                      component="span"
                      fontSize="0.75rem"
                      fontWeight={800}
                    >
                      {experience.country.flag} {experience.country.name}
                    </Typography>
                  </Stack>
                </Stack>

                {experience.collaboration ? (
                  <Stack
                    alignItems="center"
                    direction="row"
                    gap={0.75}
                    mt={1.5}
                  >
                    <CalendarMonthRoundedIcon color="action" fontSize="small" />
                    <Typography color="text.secondary" fontSize="0.8rem">
                      {experience.collaboration}
                    </Typography>
                  </Stack>
                ) : null}

                <Typography
                  color="text.secondary"
                  fontSize="0.9rem"
                  lineHeight={1.65}
                  mt={1.5}
                >
                  {experience.summary}
                </Typography>

                <Stack component="ul" gap={1} m={0} mt={2} p={0}>
                  {experience.highlights.map((highlight) => (
                    <Stack
                      component="li"
                      direction="row"
                      gap={1}
                      key={highlight}
                      sx={{ listStyle: 'none' }}
                    >
                      <CheckCircleOutlineRoundedIcon
                        color="primary"
                        fontSize="small"
                        sx={{ flexShrink: 0, mt: '2px' }}
                      />
                      <Typography
                        color="text.primary"
                        fontSize="0.85rem"
                        lineHeight={1.55}
                      >
                        {highlight}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Stack direction="row" flexWrap="wrap" gap={1} mt={2}>
                  {experience.technologies.map((technology) => {
                    const TechnologyIcon = technologyIcons[technology.icon];

                    return (
                      <Stack
                        alignItems="center"
                        component="span"
                        direction="row"
                        gap={0.5}
                        key={technology.label}
                        sx={{
                          border: 1,
                          borderColor: 'divider',
                          borderRadius: 999,
                          color: 'text.secondary',
                          px: 1,
                          py: 0.4,
                        }}
                      >
                        <TechnologyIcon sx={{ fontSize: '0.95rem' }} />
                        <Typography
                          component="span"
                          fontSize="0.7rem"
                          fontWeight={700}
                        >
                          {technology.label}
                        </Typography>
                      </Stack>
                    );
                  })}
                </Stack>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
