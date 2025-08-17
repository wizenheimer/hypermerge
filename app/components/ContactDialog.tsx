'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ContactDialogProps {
    trigger: React.ReactNode;
}

export default function ContactDialog({ trigger }: ContactDialogProps) {
    const [email, setEmail] = useState('');
    const [teamSize, setTeamSize] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Here you would typically send the data to your backend
        // For now, we'll just log it and close the dialog
        console.log('Contact form submitted:', { email, teamSize });

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsOpen(false);
        setEmail('');
        setTeamSize('');

        setIsSubmitted(true);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                {!isSubmitted ? (
                    <>
                        <DialogHeader>
                            <DialogTitle>Get Started with Hypermerge</DialogTitle>
                            <DialogDescription>Tell us about your team.</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="email" className="text-right">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="col-span-3"
                                        placeholder="your@company.com"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="teamSize" className="text-right">
                                        Team Size
                                    </Label>
                                    <Input
                                        id="teamSize"
                                        value={teamSize}
                                        onChange={(e) => setTeamSize(e.target.value)}
                                        className="col-span-3"
                                        placeholder="e.g., 5-10 engineers"
                                        required
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Get Started'}
                                </Button>
                            </DialogFooter>
                        </form>
                    </>
                ) : (
                    <div className="py-8 text-center">
                        <DialogHeader>
                            <DialogTitle>Thanks for your interest!</DialogTitle>
                            <DialogDescription className="mt-4">
                                We&apos;ll roll out access shortly.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="mt-6">
                            <Button
                                onClick={() => {
                                    setIsOpen(false);
                                    setIsSubmitted(false);
                                    setEmail('');
                                    setTeamSize('');
                                }}
                            >
                                Close
                            </Button>
                        </DialogFooter>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
