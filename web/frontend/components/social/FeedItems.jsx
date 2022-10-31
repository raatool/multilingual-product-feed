import { useState, useCallback } from "react";
import { SocialModal } from "../../components";

import { Card, Page, Stack, Layout, TextContainer, Heading, Image, Button, Icon } from "@shopify/polaris";
import { CirclePlusMinor } from '@shopify/polaris-icons';

export function FeedItems() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <Button primary icon={CirclePlusMinor} size="medium" onClick={() => setShowModal(true)}>Add feed</Button>
        <SocialModal show={showModal} close={() => setShowModal(false)} />
        </>
    );
}    