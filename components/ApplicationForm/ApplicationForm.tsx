import { Button, Card, Flex, FormControl, FormLabel, Input, Textarea, useStyleConfig } from '@chakra-ui/react';
import { render } from '@react-email/render';
import { useState } from 'react';
import { usePost } from '../../hooks/api/usePost';
import { SendEmailRequest } from '../../pages/api/sendgrid';
import { ApplicationFormVariant } from '../../theme/application-form';
import { ArrayElement } from '../../types/array-element';
import { toBase64 } from '../../utils/toBase64';
import { Dropzone } from '../Dropzone/Dropzone';
import { EmailTemplate } from './EmailTemplate';

export type Attachment = Promise<ArrayElement<NonNullable<SendEmailRequest['attachments']>>>;

export interface ApplicationFormProps {
    variant?: ApplicationFormVariant;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ variant } = { variant: 'light' }) => {
    const { performFetch, loading } = usePost('/api/sendgrid');
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [files, setFiles] = useState<File[]>([]);

    const styles = useStyleConfig('ApplicationForm', { variant });

    const onSubmit = async (e: React.FormEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const html = render(<EmailTemplate name={name} about={about} />);

        const attachmentsPromises = files.map<Attachment>(async (file) => ({
            content: await toBase64(file),
            filename: file.name,
            type: file.type,
            disposition: 'attachment',
        }));

        const attachments = await Promise.all(attachmentsPromises);

        performFetch({
            subject: 'Ny jobansøgning',
            html,
            attachments,
        });
    };

    return (
        <Card __css={styles} as="form" onSubmit={onSubmit} px={8} pt={6} pb={8} w="80%">
            <Flex direction="column" gap={4}>
                <FormControl>
                    <FormLabel>Fulde navn</FormLabel>
                    <Input __css={styles} type="text" placeholder="Dohn Joe" onChange={(e) => setName(e.target.value)} />
                </FormControl>

                <FormControl>
                    <FormLabel>Om dig</FormLabel>
                    <Textarea
                        __css={styles}
                        placeholder="Sæt nogle ord på, hvorfor vi er et godt match"
                        onChange={(e) => setAbout(e.target.value)}
                    />
                </FormControl>

                <FormControl>
                    <Dropzone onFilesChanged={setFiles}></Dropzone>
                </FormControl>

                <Button type="submit" variant="brand" onClick={onSubmit} isLoading={loading}>
                    Send
                </Button>
            </Flex>
        </Card>
    );
};