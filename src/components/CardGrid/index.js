import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const CardList = [
    {
        title: 'Kafka',
        Svg: require('@site/static/img/kafka.svg').default,
        description: "",
    },
    {
        title: 'Cassandra',
        Svg: require('@site/static/img/cassandra.svg').default,
        description: "",
    },
    {
        title: 'ELK Stack',
        Svg: require('@site/static/img/svg/elasticsearch.svg').default,
        description: "",
    },
    {
        title: 'Kafka',
        Svg: require('@site/static/img/kafka.svg').default,
        description: "",
    },
    {
        title: 'Cassandra',
        Svg: require('@site/static/img/cassandra.svg').default,
        description: "",
    },
    {
        title: 'ELK Stack',
        Svg: require('@site/static/img/svg/elasticsearch.svg').default,
        description: "",
    },
];

function Card({ Svg, title, description }) {
    return (
        <div class="card">
            <div className={styles.cardContent}>
                <div className={styles.imageContainer}>
                    <Svg className={styles.featureSvg} role="img" />
                </div>
                <div className="text--center padding-horiz--md">
                    <small>{title}</small>
                </div>
            </div>
        </div>
    );
}

export default function CardGrid() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {CardList.map((props, idx) => (
                        <div key={idx} className="col">
                            <Card key={idx} {...props} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
