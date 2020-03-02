import React from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import {
    Container,
    Description,
    Value,
    Bullet,
    ValueText,
    DescriptionText,
    DescriptionFooter,
    DescriptionTextFooter,
    IconAccessTime,
    IconPlace,
} from './styles';
import Colors from '../../Core/Styles/Colors';
import moment from '../../../vendors/moment';
import Currency from '../../Core/Currency';

const EntryListItem = ({ entry, isFirstItem, isLastItem, onPress }) => {
    const bulletLineY = isFirstItem ? 25 : 0;
    const bulletLineHeight = isLastItem ? 25 : 50;
    const showBulletLine = !(isFirstItem && isLastItem);
    const bulletColor = entry.category?.color || Colors.white;
    const bulletColorStroke = bulletColor;

    return (
        <TouchableOpacity
            onPress={() => {
                onPress && onPress(entry);
            }}
        >
            <Container>
                <Bullet>
                    <Svg height="50" width="30">
                        {showBulletLine && (
                            <Rect
                                x="9"
                                y={bulletLineY}
                                width="1.5"
                                height={bulletLineHeight}
                                fill={Colors.background}
                            />
                        )}

                        <Circle
                            cx="10"
                            cy="25"
                            r="8"
                            stroke={bulletColorStroke}
                            strokeWidth="1.5"
                            fill={bulletColor}
                        />
                    </Svg>
                </Bullet>
                <Description>
                    <DescriptionText>{entry.category.name}</DescriptionText>
                    <DescriptionFooter>
                        <IconAccessTime name="access-time" />
                        <DescriptionTextFooter>
                            {moment(entry.entryAt).calendar()}
                        </DescriptionTextFooter>
                        {!entry.address && (
                            <Container>
                                <IconPlace name="place" />
                                <DescriptionTextFooter>
                                    Botafogo - RJ
                                </DescriptionTextFooter>
                            </Container>
                        )}
                    </DescriptionFooter>
                </Description>
                <Value>
                    <ValueText>
                        <Currency value={entry.amount} />
                    </ValueText>
                </Value>
            </Container>
        </TouchableOpacity>
    );
};
export default EntryListItem;
