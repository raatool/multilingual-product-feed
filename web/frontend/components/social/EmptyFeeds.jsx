import { useState, useCallback } from "react";

import { EmptyState } from "@shopify/polaris";
import { SocialModal } from "../../components";
import { CirclePlusMinor } from '@shopify/polaris-icons';
import { socialThinking } from "../../assets";

export const EmptyFeeds = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <EmptyState
            heading="Manage product listing on social channels"
            action={{ content: 'Create Feed', icon: CirclePlusMinor, onAction: () => setShowModal(true) }}
            secondaryAction={{
                content: 'Learn more',
                url: 'https://help.shopify.com',
            }}
            image={socialThinking}
        >
            <p>You don't created any feed yet.</p>

        </EmptyState>

         <SocialModal show={showModal} close={() => setShowModal(false)} />
         </>
    );
}